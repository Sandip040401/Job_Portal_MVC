export default class JobModel{
    constructor(id, companyName,jobType, country, salary, desc){
        this.id = id;
        this.companyName = companyName;
        this.jobType = jobType;
        this.country = country;
        this.salary = salary;
        this.desc = desc;
    }

    static getAll() {
        return jobs;
    }

    static update(jobObj) {
        const index = jobs.findIndex(
            (p) => p.id == jobObj.id
        );
        jobs[index] = jobObj;
    }

    static delete(id) {
        const index = jobs.findIndex(
            (p) => p.id == id
        );
        jobs.splice(index, 1);
    }

    static add(companyName, jobType, country, salary, desc) {
        let newJob = new JobModel(
            jobs.length + 1,
            companyName,
            jobType,
            country,
            salary,
            desc
        );
        jobs.push(newJob);
    }

    static getById(id) {
        return jobs.find((p) => p.id == id);
    }
}

    var jobs = [
        new JobModel(
            1,
            'Amazon',
            'remote',
            'India',
            2000,
            'new Job'
        ),
    ];


