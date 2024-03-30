import { mLoc, mlocData } from "./classes";
import { locs } from "./locs";

export class mAreaCouncils{

  /**
 * Retrieves an array of all area councils (in FCT alone). 
 * Set oderedList to true if you want the data ordered 
 *
 * @returns {mLoc[]} An array of mLoc objects representing area councils.
 */
  static getAllAreaCouncils(oderedList?:boolean): mLoc[] {
    const acs:mLoc[] = []
    for (const acCode in locs) {
      if (locs.hasOwnProperty(acCode)) {
        const aac = locs[acCode];
        const ac:mlocData = {
          name: aac.name,
          center: aac.center
        }
        acs.push(new mLoc(acCode,ac))
      }
    }
    if(oderedList){
      return acs.slice().sort((a, b) => a.getName().localeCompare(b.getName()));
    }
    return acs;
  }

  /**
 * Retrieves an area council by its code
 *
 * @returns {mLoc}
 */
  static getAreaCouncilByCode(areaCouncilCode:string): mLoc|undefined {
    if (locs[areaCouncilCode]) {
      const aac = locs[areaCouncilCode];
      const ac:mlocData = {
        name: aac.name,
        center: aac.center
      }
      return new mLoc(areaCouncilCode,ac);
    }
    return undefined;
  }

}


export class mWard{

  /**
 * Retrieves an array of all wards in the provided areaCouncilCode code.
 * Set oderedList to true if you want the data ordered 
 *
 * @returns {mLoc[]} An array of mLoc objects representing wards.
 */
  static getStatesByCountry(areaCouncilCode:string,oderedList?:boolean): mLoc[] {
    const wards:mLoc[] = []
    if(locs[areaCouncilCode]){
      const nLoc = locs[areaCouncilCode]['wards']
      for (const wardCode in nLoc) {
        if (nLoc.hasOwnProperty(wardCode)) {
          const award = nLoc[wardCode];
          const ward:mlocData = {
            name: award.name,
            center: award.center
          }
          wards.push(new mLoc(wardCode,ward))
        }
      }
    }
    if(oderedList){
      return wards.slice().sort((a, b) => a.getName().localeCompare(b.getName()));
    }
    return wards;
  }

  /**
 * Retrieves a ward by its code and areaCouncilCode
 *
 * @returns {mLoc}
 */
  static getStateByCode(areaCouncilCode:string,wardCode:string): mLoc|undefined {
    if(locs[areaCouncilCode]){
      const nLoc = locs[areaCouncilCode]['wards']
      if (nLoc && nLoc[wardCode]) {
        const award = nLoc[wardCode];
        const ward:mlocData = {
          name: award.name,
          center: award.center
        }
        return new mLoc(wardCode, ward)
      }
    }
    return undefined;
  }

}
