import { SignpostLinkProp } from "../../structure/SignpostLinks/SignpostLinks.types"

export interface PostCodeSearchProps {
  /**
   * Title of postcode search link
   */
  title?: string;
  /**
   * Is there an error in the form?
   */
  formError?: boolean;
  /**
  * An array of the SignpostLinks
  */
  signPostLinks?: Array<SignpostLinkProp>;
  /**
  * Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage
  */
  otherCouncilLink?: string;
}
