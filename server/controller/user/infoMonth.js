const { Food_users } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");

module.exports = {
  post: (req, res) => {
    if (!req.session.userid) {
      return res.status(403).send("forbidden");
    }
    const id = req.session.userid;
    const { date } = req.body;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const lastDay = getLastDayOfMonth(month, year);
    const startDay = `${year}-${month}-01` + "T00:00:00Z";
    const endDay = `${year}-${month}-${lastDay}` + "T23:59:59Z";
    Food_users.findAll({
      where: {
        UserId: id,
        time: {
          [Op.between]: [startDay, endDay],
        },
      },
      include: [
        {
          model: Foods,
          required: true,
        },
      ],
    }).then((result) => {
      res.send(result);
    });
  },
};

function getLastDayOfMonth(month, year) {
  if (+month === 2) {
    if (+year % 4 === 0) {
      return "29";
    }
    return "28";
  }
  if ([1, 3, 5, 7, 8, 10, 12].includes(+month)) {
    return "31";
  }
  if ([4, 6, 9, 11].includes(+month)) {
    return "30";
  }
}
