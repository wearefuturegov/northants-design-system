
export interface DropDownSelectProps {
  /**
   * What question are we asking?
   */
  label: string,
  /**
   * Which value is auto selected
   */
  selected?: string,
 /**
  * What to show in the dropdown
  */
 options: Array<DropDownSelectOptionsProps>;

 optionPicked?: React.ReactNode;
}


export interface DropDownSelectOptionsProps {
  id: number;
  /**
   * Text shown in dropdown
   */
  title: string;
  /**
   * Filter sent to the all seeing server
   */
  value: string;

  checked: boolean;
}
