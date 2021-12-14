import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';

import { fDateTime } from "./formatTime.js";

//google font imports
import "@fontsource/advent-pro/600.css";
import "@fontsource/public-sans/600.css";



const timelines = [
    {
        title: 'You Started Taking Paracetamol 500mg',
        time: faker.date.past(),
        type: 'order1'
    },
    {
        title: 'A New Interaction Between Your Substances',
        time: faker.date.past(),
        type: 'order2'
    },
    {
        title: 'You Checked All Interactions Of Zoloft',
        time: faker.date.past(),
        type: 'order3'
    },
    {
        title: 'You Sourced Rxcui ID For Ibuprofen',
        time: faker.date.past(),
        type: 'order4'
    },
    {
        title: 'You Stopped Taking Marijuana',
        time: faker.date.past(),
        type: 'order5'
    }
];


OrderItem.propTypes = {

    item: PropTypes.object,
    isLast: PropTypes.bool
};


function OrderItem({ item, isLast }) {
    const { type, title, time } = item;
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              bgcolor:
                (type === 'order1' && 'primary.main') ||
                (type === 'order2' && 'success.main') ||
                (type === 'order3' && 'info.main') ||
                (type === 'order4' && 'warning.main') ||
                'error.main'
            }}
          />
          {isLast ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2" sx={{ fontFamily: "Public Sans" }}>{title}</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: "Public Sans" }}>
            {fDateTime(time)}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
}

export default function UserActivityTimeline() {
    return (
      <Card
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none'
          }
        }}
      >
        <CardHeader title="Your Activity Timeline" />
        <CardContent>
          <Timeline>
            {timelines.map((item, index) => (
              <OrderItem key={item.title} item={item} isLast={index === timelines.length - 1} />
            ))}
          </Timeline>
        </CardContent>
      </Card>
    );
}