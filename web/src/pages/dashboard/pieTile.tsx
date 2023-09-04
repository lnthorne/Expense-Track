import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

interface PieChartTileProps {
    data: any; // This should be your pie chart data structure
    amount: number;
}

const PieChartTileContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const Amount = styled.span`
    font-size: 24px;
    font-weight: bold;
`;

const PieChartTile: React.FC<PieChartTileProps> = ({ data }) => {
    return (
        <PieChartTileContainer>
            <Pie data={data} />
            <Amount>${1234.56}</Amount>
        </PieChartTileContainer>
    );
};

export default PieChartTile;
