import React from 'react';
import _ from 'lodash';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import formatCurrency from '../../utils/format-curreny';
import getColor from '../../utils/get-color';

const AllocationChart = () => {
  const loading = useSelector(state => state.categories.loading);
  const list = useSelector(state => state.categories.list);

  if (loading) {
    return null;
  }

  const colors = [];
  list.forEach((item, index) => {
    colors.push(getColor(index));
  });

  console.log(colors);

  return (
    <div className="mt-8">
      <Doughnut
        width={300}
        height={200}
        data={{
          datasets: [
            {
              borderColor: '#f4f4f4',
              hoverBorderColor: '#f4f4f4',
              borderWidth: 3,
              data: _.map(list, category => {
                if (
                  category.monthly_budgets &&
                  category.monthly_budgets.length > 0
                ) {
                  return category.monthly_budgets[0].budget;
                }

                return 0;
              }),
              backgroundColor: colors,
              label: 'Dataset 1',
            },
          ],
          labels: _.map(list, 'name'),
        }}
        options={{
          responsive: true,
          legend: false,
          title: {
            display: true,
            text: 'Budget Allocation',
            fontFamily: `'Roboto Slab', 'sans-serif'`,
            fontColor: 'black',
            fontSize: 18,
            padding: 20,
          },
          animation: {
            animateScale: true,
            animateRotate: true,
          },
          tooltips: {
            callbacks: {
              // this callback is used to create the tooltip label
              label: (tooltipItem, data) => {
                const category = data.labels[tooltipItem.index];
                const value =
                  data.datasets[tooltipItem.datasetIndex].data[
                    tooltipItem.index
                  ];
                return `${category}: € ${formatCurrency(value, 2, '.', ',')}`;
              },
            },
          },
        }}
      />
    </div>
  );
};

export default AllocationChart;
