import React from 'react';
import styled from 'styled-components';  // <-- Import styled here
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkTheme } from './redux/actions';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function DarkThemeToggle() {
  const isDarkTheme = useSelector((state) => state.theme === 'dark');
  const dispatch = useDispatch();

  return (
    <ToggleWrapper>
      <label>
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={() => dispatch(toggleDarkTheme())}
        />
        Use Dark Theme
      </label>
    </ToggleWrapper>
  );
}

export default DarkThemeToggle;
