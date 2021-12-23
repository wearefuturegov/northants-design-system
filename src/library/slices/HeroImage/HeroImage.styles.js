import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

export const Container = styled.div`
  background-image: ${props => !props.backgroundBox ? `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),` : ``} url("${props => props.image}");
  height: 36.25%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  ${props => props.theme.fontStyles}
  text-align: left;
  position: absolute;
  bottom: 14%;
  left: 8%;
  padding: 25px 25px 0 25px;
  color: ${props => props.backgroundBox ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white};
  background-color: ${props => props.backgroundBox ? props.theme.theme_vars.colours.grey_light : `transparent`};
  border-radius: 5px;
`;

export const Headline = styled(Heading)`
  margin: 0;
  color: ${props => props.backgroundBox ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white};
`;

export const Content = styled.div`
  margin-top: 10px;
  p {
      margin-bottom: 10px;
  }
`;

export const CallToActionLink = styled.a`
  ${props => props.theme.fontStyles}
  text-decoration: underline;
  color: ${props => props.theme.theme_vars.colours.white};
  width: 100%;
  padding: 0;
  margin-top: 10px;
  display: inline-block;

  &:hover, &:focus {
    text-shadow:
    2px 2px 4px rgba(100, 100, 100, 0.5),
    -2px 2px 4px rgba(100, 100, 100, 0.5),
    2px -2px 4px rgba(100, 100, 100, 0.5),
    -2px -2px 4px rgba(100, 100, 100, 0.5);
-moz-text-shadow:
    2px 2px 4px rgba(100, 100, 100, 0.5),
    -2px 2px 4px rgba(100, 100, 100, 0.5),
    2px -2px 4px rgba(100, 100, 100, 0.5),
    -2px -2px 4px rgba(100, 100, 100, 0.5);
-webkit-text-shadow:
    2px 2px 4px rgba(100, 100, 100, 0.5),
    -2px 2px 4px rgba(100, 100, 100, 0.5),
    2px -2px 4px rgba(100, 100, 100, 0.5),
    -2px -2px 4px rgba(100, 100, 100, 0.5);
  }
  &:focus {
    outline: none;
    box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
  }
  &:active {
    transform: translate(3px);
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset !important;
  }
`
