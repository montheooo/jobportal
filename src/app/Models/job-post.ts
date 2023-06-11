export interface JobPost {

  id:string,
  jobPostDate?:string,
  jobTitle: string,
  jobDescription: string,
  location: string,
  rating?:number,
  salary:number,
  language:Language,
  company:string,
  jobType:JobType,
  segment:string
}

export enum segment {

   frontEnd = "front end",
   backEnd = "back end",
   fullStack = "full stack"
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
