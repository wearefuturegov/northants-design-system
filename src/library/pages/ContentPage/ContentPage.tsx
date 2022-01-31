import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import Divider from '../../slices/Divider/Divider';
import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import DownloadableFiles from '../../slices/DownloadableFiles/DownloadableFiles';
import CallToAction from '../../slices/CallToAction/CallToAction';
import Accordion from '../../slices/Accordion/Accordion';
import WarningTextDisclaimer from '../../slices/WarningTextDisclaimer/WarningTextDisclaimer';
import Summary from '../../structure/Summary/Summary';
import { smallTable, largeTable } from './ContentPage.storydata';

export interface ContentPageProps {}

export const ContentPage: React.FunctionComponent<ContentPageProps> = ({}) => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Example page with all slices" />

        <Summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta semper velit. Fusce viverra arcu
            eu leo tincidunt pulvinar.
          </p>
        </Summary>

        <p>
          Nulla vitae elit{' '}
          <a href="http://google.com" target="_blank">
            libero
          </a>
          , a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi
          erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>

        <p>
          <strong>Bold</strong>, <em>italic</em>, <sup>sub1</sup>, <sub>sub2</sub>,{' '}
          <a href="http://google.com" target="_blank">
            link
          </a>
        </p>

        <BlockQuote
          quote="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          citation="Porta Commodo"
        />
        <p>
          Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare
          sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.
        </p>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
        </ul>
        <ol>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
        </ol>
        <p>text inbetween lists</p>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
        </ul>
        <Divider />
        <Heading level={2} text="H2 - second level heading" />

        <p>
          Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
        </p>

        <Heading level={2} text="H2 - second level heading with sub titles" />
        <Heading level={3} text="H3 - third level heading under title" />
        <p>
          Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
        </p>
        <Heading level={3} text="H3 - third level heading under text" />
        <Heading level={4} text="H4 - fourth level heading under H3" />
        <p>
          Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
        </p>
        <Divider />
        <Heading level={2} text="H2 - second level heading with after divider" />
        <p>Download these files:</p>
        <DownloadableFiles
          files={[
            {
              title:
                'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
              type: 'PDF',
              url: 'https://www.google.com/test4.pdf',
              size: '1.2 MB',
            },
            {
              title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
              type: 'PDF',
              url: 'https://www.google.com/test5.pdf',
              size: '279.06 KB',
            },
          ]}
        />

        <p>Click this button!</p>
        <CallToAction text="Test button" url="http://google.com" />
        <p>Example table:</p>
        <div className="table-container">
          <table>
            <caption>{smallTable.caption}</caption>
            <thead>
              <tr>
                {smallTable.headings.map((heading) => (
                  <th scope="col">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {smallTable.data.map((row) => (
                <tr>
                  {row.map((item) => (
                    <td>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Example massive table:</p>
        <div className="table-container">
          <table>
            <caption>{largeTable.caption}</caption>
            <thead>
              <tr>
                {largeTable.headings.map((heading) => (
                  <th scope="col">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(100)].map((row, rowIndex) => (
                <tr>
                  <th>Town {rowIndex + 1}</th>
                  {[...Array(8)].map((item, itemIndex) => (
                    <td>{rowIndex + 1 + itemIndex}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Accordion
          sections={[
            {
              title: 'Tortor Magna',
              summary: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
              content: (
                <p>
                  <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem
                  lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a
                  pharetra augue.
                </p>
              ),
              isExpanded: true,
            },
            {
              title: 'Fusce Risus Malesuada',
              content: (
                <>
                  <Heading level={2} text="A slice within an accordion" />
                  <p>
                    Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
                  </p>
                  <Divider />
                  <p>
                    <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem
                    lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a
                    pharetra augue.
                  </p>
                </>
              ),
            },
          ]}
        />
        <WarningTextDisclaimer />
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer
      footerLinksArray={[
        {
          title: 'About',
          url: '/',
        },
        {
          title: 'Accessibility',
          url: '/',
        },
        {
          title: 'Cookies',
          url: '/',
        },
        {
          title: 'Contact us',
          url: '/',
        },
        {
          title: 'Jobs',
          url: '/',
        },
        {
          title: 'Newsletter',
          url: '/',
        },
      ]}
    />
  </>
);
