import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from '../../redux/filterSlice';
import { filterSelector } from '../../redux/selectors';
import { Input, Label } from './Filter.Styled';

const filterId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  return (
    <>
      <Label htmlFor="fname">Fined contacts by name</Label>
      <Input
        id={filterId}
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
        type="text"
        name="filter"
      />
    </>
  );
};

export default Filter;
