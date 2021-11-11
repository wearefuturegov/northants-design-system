export interface AutocompleteProps {
    /**
     * ID attribute of the Downshift control (subsidiary label/input/menu list get IDs based upon this)
     */
    id?: string;

    /**
     * Name attribute of the input control
     */
    name?: string;

    /**
     * Text content of the label for the control
     */
    labelText?: string;

    /**
     * Default value of the input control
     */
    value?: string;

    /**
     * Size of the input control
     */
    size?: number;

    /**
     * Placeholder within the input control
     */
    placeholder?: string;

    /**
     * For slightly larger display in some circumstances
     */
    isLarge?: boolean;

    /**
     * Controls the input control's error state
     */
    isErrored?: boolean;

    /**
     * Text to display if input control is in error state
     */
    errorText?: string;

    /**
     * Array of suggestion strings
     */
    suggestions?: string[];

    /**
     * Controls whether suggestions are shown immediately (if value set also)
     */
    showSuggestions?: boolean;

    /**
     * The minimum number of characters that need to be typed before matches in the suggestions list are looked for
     */
    minimumMatchLength?: number;

    /**
     * Callback function for when a suggestion is selected
     */
    onSelect?: (selectedValue: string) => void;

    /**
     * Callback function for when input value changes
     */
    onChange?: (inputValue: string) => void;
}
