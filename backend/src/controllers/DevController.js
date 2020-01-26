const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });

      return res.json(dev);
    }

    return res
      .status(400)
      .json({ error: `The dev ${github_username} already registered!` });
  },

  async update(req, res) {
    const {
      github_username,
      avatar_url,
      bio,
      techs,
      latitude,
      longitude
    } = req.body;

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const techsArray = parseStringAsArray(techs);

    const dev = await Dev.findOneAndUpdate(github_username, {
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    if (!dev) {
      return res.status(404).json({
        error: `The dev ${github_username} is not was registered yet!`
      });
    }

    return res.json(dev);
  },

  async delete(req, res) {
    const github_username = req.query.username;
    await Dev.findOneAndDelete(github_username);

    return res.sendStatus(204);
  }
};
