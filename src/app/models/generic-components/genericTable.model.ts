import { allEntities } from "../entities/all-entities.model";

export interface GenericTable {
    
    arrHeader : ArrHeaderKeys[];
    // arrMainNgFor can be replaced by any SQL response
    arrMainNgFor : allEntities[];
    searchBar? : SearchBar;
    filter? : Filter[];
    // alertMsgFilterNoMatch is the text alert when filter make the ngFor array lengh coming to zero
    alertMsgFilterNoMatch? :string;
    // actions can be filled by an array with the text of the action and the method to call, if it stay undefined, the generic table will only be for display
    // actions is always filled in the ngOnInit, otherwise we get an error "property is used before initialisation" ///// the method passed to the obj are method with callback
    // if can add an ngIf to conditionnaly display actions
    // key is the key of the arrMainNgFor to test
    // val is the value to test
    // equal is to know if we test === || !==
    // this.actions = [
    //   { text: 'Modifier', method: this.updateUser },
    // in this exemple the ngIf will be : statut == null
    //   { text: 'Supprimer', method: this.deleteUser,if : {key :"statut",val : null,equal : true} },
    // ];
    actions? : any[];
    height? : string; // height in (vh) of the table EX : max-h-[80vh]
    paddingColumn? : string; // px-6 py-4 - px-2 py-1
    page? : number


}

// Header of the <table>, name is what the user see, key is the real name of the key of obj
// subValue is if we display an array of subObj or just an object linked to main entity
// badge is for setting a span with border rounded and blue light bg
export interface ArrHeaderKeys {
    name : string;
    key : string;
    subValue? : string;
    badge? : boolean;
    active? : boolean;
    date? : boolean;
    maxWidth? : string;
    
}

// option which deserve to add a searchBar upper the table, searchbar can be NULL.
export interface SearchBar {
    placeholder : string
}

  // array of fiter, each item of the array become a <select>
  // option is for fill the <option>
  // placeholder is the first row "<option disabled selected>" (kind of <select> title)
  // keyNgForFilter : we're iterating on an ngFor, this string deserve to know which key of the current iteration we have to filter
  // EX : keyNgForFilter: 'id_category' ===>>> arrNgFor.filter((el[keyNgForFilter] == ...))
  // keyOptionFilter : this time, it's for precise by which key we filter
  // EX : keyOptionFilter : 'id' ======>>>>>>  we have a select with a <option ngFor="let item of option">, if option is an array of object we can precise which key use for filter
  // EX : combining  keyNgForFilter : id  && keyOptionFilter : id_category  ====>>>> <option ngFor="let item of option value="item[obj.keyOptionFilter]">
  // SO the filter function will do something like  arrNgFor.filter((el[keyNgForFilter] == item.target.value)) value will be the "item[obj.keyOptionFilter]"*
  // filterNgModelValue && filterValue are just 2 values which deserve to handle some display logic and reseting the <select> correctly
  //optionDisplaykey is used when the option arrays is an array of object to display the "text" value <option ngFor="let item of option >{{item[obj.optionDisplaykey]}}</option>
  // filter can be equal to NULL, in this case no filter on the table
export interface Filter {
    option : string[] | any[]
    placeholder : string;
    keyNgForFilter? : string;
    keyOptionFilter? : string;
    filterValue : string;
    filterNgModelValue : string;
    optionDisplaykey? : string;
} 