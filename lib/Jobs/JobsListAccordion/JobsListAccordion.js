import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Accordion,
  Icon,
  Badge,
} from '@folio/stripes/components';

import { jobExecutionPropTypes } from '../jobExecutionPropTypes';
import { JobsList } from '../JobsList';

const getClosedDisplay = (hasLoaded, jobsAmount) => {
  if (hasLoaded) return (<Badge>{jobsAmount}</Badge>);

  return (
    <Icon
      icon="spinner-ellipsis"
      width="10px"
    />
  );
};

export const JobsListAccordion = props => {
  const {
    jobs,
    hasLoaded,
    titleId,
    emptyMessageId,
    itemFormatter,
  } = props;

  return (
    <Accordion
      label={(
        <span data-test-jobs-accordion-title>
          <FormattedMessage id={titleId} />
        </span>
      )}
      separator={false}
      displayWhenClosed={getClosedDisplay(hasLoaded, jobs.length)}
    >
      <JobsList
        jobs={jobs}
        hasLoaded={hasLoaded}
        itemFormatter={itemFormatter}
        isEmptyMessage={<FormattedMessage id={emptyMessageId} />}
      />
    </Accordion>
  );
};

JobsListAccordion.propTypes = {
  itemFormatter: PropTypes.func.isRequired,
  hasLoaded: PropTypes.bool.isRequired,
  titleId: PropTypes.string.isRequired,
  emptyMessageId: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(jobExecutionPropTypes).isRequired,
};
