// Analyzing occupation function
exports.getOccupation = async (req, res) => {
  try {
    const { occupationString } = req.body;

    // Validate input
    if (!occupationString) {
      return res.status(400).json({
        success: false,
        message: "occupationString is required"
      });
    }

    const occupation = await occupationAnalyzer(occupationString);

    // If analyzer fails to detect occupation
    if (!occupation) {
      return res.status(404).json({
        success: false,
        message: "Unable to determine occupation"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Occupation fetched successfully",
      data: occupation
    });

  } catch (error) {
    console.error("Occupation controller error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};