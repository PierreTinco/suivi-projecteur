export interface FindBy  {
    where? : any;
    select? : string[]
    relations? : string[]
    in? : any
    like?:any
    notEqual?:any
    order? : any;
    // leftJoinAndSelect": {
    // "entity.subrelation": "entity.subrelation"
    // }
    // "relations" : ["entity","entity.subrelation"]
    leftJoinAndSelect? :any
}