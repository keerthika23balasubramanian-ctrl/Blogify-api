exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "All posts fetched successfully"
    }
  });
};

exports.getPostById = (req, res) => {
  const { postId } = req.params;

  res.status(200).json({
    success: true,
    data: {
      postId: postId
    }
  });
};
