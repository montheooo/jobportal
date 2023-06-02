export interface JobPost {

  jobPostDate:string,
  jobTitle: string,
  jobDescription: string,
  location: string,
  rating:number
  salary:number,
  language:Language,
  company:string,
  jobType:JobType
}

export enum JobType {

   onSite = "On site",
   remote = "Remote",
   hybrid = "Hybrid"
}

export enum Language{

  french = "French",
  english = "English",
  bilingual = "Bilingual"
}
