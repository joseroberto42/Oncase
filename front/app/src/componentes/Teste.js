import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DoughnutChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Porcentagem de Contribuição',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
        cutout: '50%', // Propriedade `cutout` para definir o tamanho do "furo" central da rosca
      },
    ],
  });

  const vibrantColors = [
    'rgba(255, 99, 132, 0.7)',   // Cor 1
    'rgba(54, 162, 235, 0.7)',   // Cor 2
    'rgba(255, 206, 86, 0.7)',   // Cor 3
    'rgba(75, 192, 192, 0.7)',   // Cor 4
    'rgba(153, 102, 255, 0.7)',  // Cor 5
    'rgba(255, 159, 64, 0.7)',   // Cor 6
    'rgba(255, 0, 255, 0.7)',    // Cor 7
    'rgba(0, 255, 255, 0.7)',    // Cor 8
    'rgba(0, 255, 0, 0.7)',      // Cor 9
    'rgba(0, 0, 255, 0.7)',      // Cor 10
  ];

  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/colaboradores/');
        const data = await response.json();

        const labels = data.map((colaborador) => `${colaborador.primeiro_nome} ${colaborador.ultimo_nome}`);
        const dataPoints = data.map((colaborador) => colaborador.porcentagem_contribuicao);

        const backgroundColors = vibrantColors.slice(0, Math.min(data.length, 10));
        const borderColors = backgroundColors.map(color => color.replace('0.7', '1'));

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Porcentagem de Contribuição',
              data: dataPoints,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
              cutout: '50%',
            },
          ],
        });
      } catch (error) {
        console.error('Erro ao buscar colaboradores:', error);
      }
    };

    fetchColaboradores();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
        gap: '20px',
      }}
    >
      {/* Contêiner para o gráfico de rosca */}
      <div
        style={{
          width: '100%',
          maxWidth: '500px', // Largura máxima para evitar exageros em telas grandes
          height: 'auto', // Ajusta a altura automaticamente
        }}
      >
        <Doughnut
          data={chartData}
          options={{
            responsive: true, // Define que o gráfico deve se ajustar ao tamanho do contêiner
            maintainAspectRatio: false, // Permite que a altura e largura sejam definidas separadamente
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  boxWidth: 20,
                  padding: 10,
                },
              },
            },
            layout: {
              padding: 20,
            },
          }}
        />
      </div>

      {/* Contêiner para os dados e legendas */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px', // Largura máxima para a lista de colaboradores
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0, margin: '0 auto' }}>
          {chartData.labels.map((label, index) => (
            <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              {/* Círculo colorido representando cada colaborador */}
              <span
                style={{
                  display: 'inline-block',
                  width: '15px',
                  height: '15px',
                  backgroundColor: chartData.datasets[0].backgroundColor[index],
                  marginRight: '10px',
                }}
              />
              {label}: {chartData.datasets[0].data[index]}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoughnutChart;

