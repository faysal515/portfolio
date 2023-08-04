import AllFavTechs from '../icons/AllFavTechs';
import AnimationContainer from '../utils/AnimationContainer';
import ShowSkills from '../utils/ShowSkills';

const CurrentFavTech = () => {
  const skills = ['Node.js', 'Typescript', 'Javascript', 'MongoDB', 'PostgreSQL']
  return (
    <AnimationContainer customClassName='flex flex-col justify-center items-center lg:items-start mb-5 mx-auto lg:mx-0'>
      <ShowSkills skills={skills} />
    </AnimationContainer>
  )
}

export default CurrentFavTech;