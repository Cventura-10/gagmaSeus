// Import the specific actions from @/api/myApi
import { fetchData } from '@/api/myApi';

// Import the specific actions from @api
import { fetchSalesData, fetchInventoryData, fetchProfitLossData } from '@api';

// Use useDispatch and useSelector hooks to interact with Redux
import { useDispatch, useSelector } from 'react-redux';

// Example component using the actions
const DashboardComponent = () => {
  const dispatch = useDispatch();
  const salesData = useSelector((state) => state.salesData);
  const inventoryData = useSelector((state) => state.inventoryData);
  const profitLossData = useSelector((state) => state.profitLossData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dispatch actions to fetch data when the component mounts
        dispatch(fetchSalesData());
        dispatch(fetchInventoryData());
        dispatch(fetchProfitLossData());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Rest of your component code
};

export default DashboardComponent;
