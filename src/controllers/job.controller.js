import JobModel from "../models/job.model.js";

export default class JobsController {
    viewJobs(req, res, next){
        var jobs = JobModel.getAll();
        res.render("viewJob", { jobs });
    }

    addJobs(req, res, next){
        res.render("addJob",  {
            errorMessage: null,
          });
    }
}
