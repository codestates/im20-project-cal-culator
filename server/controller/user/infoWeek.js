const { Food_users } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");
const getMondayOfNthWeek = require("../helperFunction/getMondayOfNthWeek");

module.exports = {
  post: (req, res) => {
    if (!req.session.userid) {
      return res.status(403).send("forbidden");
    }
    const id = req.session.userid;
    const { date } = req.body;
    const [formattedStartDate, formattedEndDate] = getMondayOfNthWeek(date);

    const startDay = formattedStartDate + "T00:00:00Z";
    const endDay = formattedEndDate + "T23:59:59Z";
    Food_users.findAll({
      where: {
        UserId: id,
        // time constraints exist!
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
