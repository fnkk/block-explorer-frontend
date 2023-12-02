import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';

import * as addressMocks from 'mocks/address/address';
import * as inputDataMocks from 'mocks/txs/decodedInputData';
import TestApp from 'playwright/TestApp';

import LogItem from './LogItem';

const TOPICS = [
  '0x3a4ec416703c36a61a4b1f690847f1963a6829eac0b52debd40a23b66c142a56',
  '0x0000000000000000000000000000000000000000000000000000000005001bcf',
  '0xe835d1028984e9e6e7d016b77164eacbcc6cc061e9333c0b37982b504f7ea791',
  null,
];
const DATA = '0x0000000000000000000000000000000000000000000000000070265bf0112cee';

test('with decoded input data +@mobile +@dark-mode', async({ mount }) => {
  const component = await mount(
    <TestApp>
      <LogItem
        index={ 42 }
        decoded={ inputDataMocks.withIndexedFields }
        address={ addressMocks.withName }
        topics={ TOPICS }
        data={ DATA }
        type="transaction"
        tx_hash={ null }
      />
    </TestApp>,
  );
  await expect(component).toHaveScreenshot();
});

test('without decoded input data +@mobile', async({ mount }) => {
  const component = await mount(
    <TestApp>
      <LogItem
        index={ 42 }
        decoded={ null }
        address={ addressMocks.withoutName }
        topics={ TOPICS }
        data={ DATA }
        type="transaction"
        tx_hash={ null }
      />
    </TestApp>,
  );
  await expect(component).toHaveScreenshot();
});
