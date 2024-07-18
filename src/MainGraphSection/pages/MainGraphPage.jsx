import BloodSugarPage from '../../BloodSugar/pages/BloodSugarPage';
import FoodBarChart from '../../Graphs/components/FoodBarChart';
import AverageBloodSugarChart from '../../Graphs/components/AverageBloodSugarChart';

const MainGraphPage = () => {
  return (
    <>
      <BloodSugarPage></BloodSugarPage>
      <FoodBarChart></FoodBarChart>
      <AverageBloodSugarChart></AverageBloodSugarChart>
    </>
  );
};

export default MainGraphPage;
