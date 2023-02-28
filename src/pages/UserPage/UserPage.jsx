import React from 'react';

import { LeftNav, Dashboard } from '../../components';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 117px auto;
  nav {
    grid-column: 1;
  }
  main {
    grid-column: 2;
  }
`;
// Single page

export function UserPage() {
  return (
    <Container>
      <LeftNav />
      <Dashboard />
    </Container>
  );
}
