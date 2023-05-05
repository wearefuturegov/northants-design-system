import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .striped-contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
    background-color: ${(props) =>
      props.theme.cardinal_name === 'north'
        ? props.theme.theme_vars.colours.grey_light
        : props.theme.theme_vars.colours.action_light + '80'};

    &:nth-of-type(even) {
      background-color: ${(props) =>
        props.theme.cardinal_name === 'north'
          ? props.theme.theme_vars.colours.white
          : props.theme.theme_vars.colours.action_light};
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

export const Contact = styled.div``;

export const ContactName = styled.div`
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  text-align: center;
`;

export const ContactLink = styled.a`
  display: block;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  text-align: center;
`;

export const WebLink = styled.a`
  word-break: break-all;
  display: block;
  text-align: center;
`;

export const EmailLink = styled.a`
  word-break: break-all;
  display: block;
  text-align: center;
`;
