import styled from 'styled-components';
import { ErrorText } from '../../components/Input/Input.styles';
import { VisuallyHidden } from '../../helpers/style-helpers';
import { Container } from '../PageMain/PageMain.styles';

export const FormContainer = styled(Container)`
  display: block;
  .grecaptcha-badge {
    visibility: hidden;
  }
`;

export const PanelWrapper = styled.div`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
`;

export const FormWrapper = styled.div`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
`;

export const ShowQuestion = styled.div`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
`;

export const ShowFullForm = styled.div`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  flex-direction: column;
`;

export const Legend = styled.legend`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Hint = styled.p``;

export const FormErrorText = styled(ErrorText)``;

export const Hidden = styled.span`
  ${VisuallyHidden}
`;

export const Terms = styled.p`
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
`;

export const QuestionContainer = styled.div`
  border: 2px solid ${(props) => props.theme.theme_vars.colours.grey_light};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

export const QuestionTitle = styled.p`
  font-weight: bold;
`;

export const QuestionButton = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;
