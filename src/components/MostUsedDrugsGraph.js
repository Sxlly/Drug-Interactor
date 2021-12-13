import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';

import BaseOptionChart from './BaseOptionChart';


const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];

export default function MostUsedDrugsGraph() {

    const chartOptions = merge(BaseOptionChart(), {

        tooltip: {

            marker: { show: false },
            y: {
                title: {
                    formatter: (seriesName) => `#${seriesName}`
                }
            }
        },

        plotOptions: {
            bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
        },
        xaxis: {
            categories: [
                'Zoloft',
                'Marijuana',
                'Xanax',
                'Adderall',
                'Paracetamol',
                'Ibuprofen',
                'Nicotine',
                'Alcohol',
                'Aspirin',
                'Caffeine',
            ]
        }
    });

    return (
        <Card>
            <CardHeader title="Most Used Drugs" subheader="worldwide data" />
            <Box sx={{ mx: 3 }} dir="ltr">
                <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
            </Box>
        </Card>

    );
}