export interface DropDownSelectProps {
  /**
   * ID for the dropdown
   */
  id?: string;

  /**
   * What question are we asking?
   */
  label: string;

  /**
   * Which value is auto selected
   */
  selected?: string;

  /**
   * What to show in the dropdown
   */
  options: Array<DropDownSelectOptionsProps>;

  /**
   * A function tfor what happnens if the select is changed (totally optional)
   */
  onChange?: (e: any) => void;

  /**
   * Hide label, but visible for screen readers (totally optional)
   */
  hideLabel?: boolean;

  /**
   * Should the label text be bold?
   */
  boldLabel?: boolean;

  /**
   * Optional hint text for the input
   */
  hintText?: string;
}

export interface DropDownSelectOptionsProps {
  /**
   * Text shown in dropdown
   */
  title: string;

  /**
   * Filter sent to the all seeing server
   */
  value: string;
}
