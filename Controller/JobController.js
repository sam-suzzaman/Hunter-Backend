module.exports.getAllJobs = (req, res) => {
    // const { id } = req.params;
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "all jobs" });
};

module.exports.addJob = (req, res) => {
    // const { id } = req.params;
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "Job added" });
};

module.exports.getSingleJob = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "Single Job" });
};

module.exports.updateSingleJob = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "Single Job updated" });
};

module.exports.deleteSingleJob = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const job = jobs.find((job) => job._id === id);
    // if (!job) {
    //     res.status(404).json({ message: "Job not found" });
    //     return;
    // }
    res.status(200).json({ message: "Single Job deleted" });
};
