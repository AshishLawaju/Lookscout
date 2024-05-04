import { Contact } from "../model/contact.model.js";

const sendMessage = async (req, res, next) => {
  try {
    const { name, email, phone, getInTouch, message } = req.body;

    const newMessage = await Contact.create({
      name,
      email,
      phone,
      getInTouch,
      message,
    });

    if (!newMessage) {
      return res
        .status(500)
        .json({ success: false, message: "unable to send message" });
    }

    return res.status(200).json({ success: true, message: "message sent!" });
  } catch (error) {
    next(error);
  }
};

const getAllMessage = async (req, res, next) => {
  try {
    const allMessage = await Contact.find();
    if (!allMessage) {
      return res
        .status(500)
        .json({ success: false, message: "unable to get message" });
    }
    return res
      .status(200)
      .json({ success: true, message: "message", data: allMessage });
  } catch (error) {
    next(error);
  }
};

export { sendMessage ,getAllMessage };
