const path = require("path");
const Productmod = require("../db/productdb.js");
const fs = require("fs");

module.exports = {
  async addscheme(req, res) {
    try {
      const objimg = req.files.pimg;
      const imageName = Date.now() + "_" + objimg.name;
      const uploadPath = path.join(__dirname, "..", "public", "productimage", imageName);

      // Ensure the folder exists
      fs.mkdirSync(path.dirname(uploadPath), { recursive: true });

      objimg.mv(uploadPath, async (err) => {
        if (err) {
          console.error("Image Upload Error:", err);
          return res.status(500).json({ error: "Image upload failed." });
        }

        const insobj = {
          pname: req.body.pname,
          pprice: req.body.pprice,
          pDetails: req.body.pDetails,
          pimg: "/productimage/" + imageName, // store relative path
        };

        await Productmod.create(insobj);
        return res.json({ msg: "Product added successfully" });
      });
    } catch (e) {
      console.error("Server Error:", e);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async sel(req, res) {

    var data = await Productmod.find();

    res.json(data);

  },

  async del(req, res) {
    var id = req.body.id;
    await Productmod.findByIdAndDelete(id);

    res.json({msg:"I am Delete Controller"})
  },

  edit(req, res) {
    res.json({ msg: "I am edited" });
  }
};
