const Tour = require('./tourModel'); // Import your Mongoose model

// Controller function to delete a tour by its ID
let deleteTour = async (req, res) => {
  const tourId = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(tourId);
    if (!deletedTour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    res.json({ message: 'Tour deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete tour' });
  }
};
module.exports={deleteTour};

// Controller function to update a tour by its ID
let updateTour = async (req, res) => {
  const tourId = req.params.id;
  const { Personname, Email, Mobile, Tourselected, Price } = req.body;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      tourId,
      { Personname, Email, Mobile, Tourselected, Price },
      { new: true }
    );
    if (!updatedTour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    res.json(updatedTour);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update tour' });
  }
};
module.exports={updateTour};
