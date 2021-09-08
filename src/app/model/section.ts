import { Metadata } from "../model/metadata";
import { SectionTable } from "./sectionTable";

export class Section{
    sectionID? : string;
    isComplex? : string; //boolean
    sectionTitle: string;
    isSectionTitleEditable: string; //boolean
    isSectionTitleIncludedForPreview: string; //boolean
    titleMetadata?: Metadata; //need to comment
    sectionType : string;
    sectionContent : string;
    sectionMetadata? : Metadata;   ////need to comment
    isSectionContentEditable : string; //boolean
    tableInfo : SectionTable;
    titleStyle : string;
    sectionStyle : string;
   // isTitleEditable : string;
}