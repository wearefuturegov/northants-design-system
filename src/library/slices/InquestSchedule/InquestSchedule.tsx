import React from 'react';
import { CaseAppointmentProps, CaseAppointmentType, InquestScheduleProps } from './InquestSchedule.types';
import * as Styles from './InquestSchedule.styles';
import Heading from '../../components/Heading/Heading';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import { AccordionSectionProps } from '../Accordion/Accordion.types';
import Accordion from '../Accordion/Accordion';

/**
 * A table displaying a schedule of inquests
 */
const InquestSchedule: React.FunctionComponent<InquestScheduleProps> = ({ caseAppointments, title, error = false }) => {
  const hearings: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.Hearing);
  });
  const openings: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.Opening);
  });
  const writings: CaseAppointmentProps[] = caseAppointments.filter((appointment) => {
    return appointment.appointmentType.toLowerCase().includes(CaseAppointmentType.Writing);
  });

  const groupHearingsByDay = (appointments: CaseAppointmentProps[]) => {
    return appointments.reduce((acc, inquest) => {
      const inquestDate = new Date(inquest.startDateTime);
      const inquestISODay = inquestDate.toISOString().substring(0, 10);
      if (!acc[inquestISODay]) {
        acc[inquestISODay] = [];
      }
      acc[inquestISODay].push(inquest);
      return acc;
    }, {});
  };

  const hearingDayGrouped = groupHearingsByDay(hearings);
  const openingDayGrouped = groupHearingsByDay(openings);
  const writingDayGrouped = groupHearingsByDay(writings);

  const formatDate = (inquestDay: Date) => {
    return inquestDay
      .toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace(',', '');
  };

  const formatTime = (inquestDate: Date) => {
    return inquestDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const transformToSections = (groupedData): AccordionSectionProps[] => {
    return Object.keys(groupedData).map((day) => {
      const inquestDayDate = new Date(day);
      return {
        title: formatDate(inquestDayDate),
        content: (
          <Row>
            {groupedData[day]
              .sort((a, b) => {
                return new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime();
              })
              .map((inquest, key) => {
                const startDateTime = new Date(inquest.startDateTime);
                const timeOfDeath = new Date(inquest.dateTimeOfDeath);
                return (
                  <Column small="full" medium="full" large="full" key={key}>
                    <Styles.InquestContainer>
                      <Styles.InquestTime>
                        <strong>{formatTime(startDateTime)}</strong>
                      </Styles.InquestTime>
                      <Styles.InquestDetails>
                        <strong>Name:</strong> {inquest.fullName}.
                        <br />
                        <strong>Died:</strong> {formatDate(timeOfDeath)} at {inquest.placeOfDeath}. Aged {inquest.age}{' '}
                        years.
                        <br />
                        <strong>Court location:</strong> {inquest.courtroomFullAddress}.
                        <br />
                        <strong>Coroner:</strong> {inquest.coroner}.
                      </Styles.InquestDetails>
                    </Styles.InquestContainer>
                  </Column>
                );
              })}
          </Row>
        ),
      };
    });
  };

  return (
    <Styles.Container data-testid="InquestSchedule">
      {Object.keys(hearingDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text={title} />
          <Accordion sections={transformToSections(hearingDayGrouped)} />
        </Styles.GroupContainer>
      )}

      {Object.keys(openingDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text="Inquest Openings" />
          <Accordion sections={transformToSections(openingDayGrouped)} />
        </Styles.GroupContainer>
      )}

      {Object.keys(writingDayGrouped).length > 0 && (
        <Styles.GroupContainer>
          <Heading level={2} text="Inquests in Writing" />
          <Accordion sections={transformToSections(writingDayGrouped)} />
        </Styles.GroupContainer>
      )}

      {caseAppointments.length === 0 && (
        <div>
          <p>We can't find any results at the moment.</p>
          {error ? (
            <p> The information is currently unavailable.</p>
          ) : (
            <p>There are no inquests scheduled for next month.</p>
          )}
        </div>
      )}
    </Styles.Container>
  );
};

export default InquestSchedule;
