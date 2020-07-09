import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const CollapseIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg viewBox="8 8 16 16" role="presentation" className={classes.svg} focusable="false">
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M16,23c0,0.14-0.05,0.25-0.15,0.35c-0.1,0.1-0.22,0.15-0.35,0.15c-0.14,0-0.25-0.05-0.35-0.15C15.05,23.25,15,23.14,15,23
        v-4.29l-4.15,4.14c-0.1,0.1-0.22,0.15-0.35,0.15c-0.14,0-0.25-0.05-0.35-0.15c-0.1-0.1-0.15-0.22-0.15-0.35
        c0-0.13,0.05-0.25,0.15-0.35L14.29,18H9.5c-0.14,0-0.25-0.05-0.35-0.15C9.05,17.75,9,17.64,9,17.5c0-0.13,0.05-0.25,0.15-0.35
        C9.25,17.05,9.36,17,9.5,17h6c0.14,0,0.25,0.05,0.35,0.15c0.1,0.1,0.15,0.22,0.15,0.35V23z M23.5,14.5c0,0.14-0.05,0.25-0.15,0.35
        C23.25,14.95,23.13,15,23,15h-5.5c-0.14,0-0.25-0.05-0.35-0.15c-0.1-0.1-0.15-0.22-0.15-0.35V9c0-0.14,0.05-0.25,0.15-0.35
        c0.1-0.1,0.22-0.15,0.35-0.15c0.13,0,0.25,0.05,0.35,0.15C17.95,8.75,18,8.86,18,9v4.29l4.15-4.14C22.25,9.05,22.36,9,22.5,9
        c0.13,0,0.25,0.05,0.35,0.15C22.95,9.25,23,9.36,23,9.5c0,0.14-0.05,0.25-0.15,0.35L18.71,14H23c0.13,0,0.25,0.05,0.35,0.15
        C23.45,14.25,23.5,14.36,23.5,14.5z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M16,17.47v5.5c0,0.14-0.03,0.26-0.08,0.38c-0.05,0.12-0.13,0.23-0.22,0.32c-0.09,0.09-0.2,0.16-0.32,0.22
        c-0.12,0.05-0.25,0.08-0.38,0.08c-0.14,0-0.26-0.03-0.38-0.08c-0.12-0.05-0.23-0.13-0.32-0.22c-0.09-0.09-0.16-0.2-0.22-0.32
        C14.03,23.23,14,23.1,14,22.97v-3.09l-3.29,3.3c-0.09,0.09-0.2,0.17-0.32,0.21c-0.12,0.05-0.26,0.07-0.39,0.07
        c-0.14,0-0.26-0.03-0.38-0.08c-0.12-0.05-0.23-0.13-0.32-0.22c-0.09-0.09-0.16-0.2-0.22-0.32C9.03,22.73,9,22.6,9,22.47
        c0-0.13,0.02-0.27,0.07-0.39c0.05-0.12,0.12-0.23,0.21-0.32l3.3-3.29H9.5c-0.14,0-0.26-0.03-0.38-0.08C9,18.33,8.89,18.26,8.8,18.17
        c-0.09-0.09-0.16-0.2-0.22-0.32C8.53,17.73,8.5,17.6,8.5,17.47c0-0.13,0.03-0.26,0.08-0.38c0.05-0.12,0.13-0.23,0.22-0.32
        c0.09-0.09,0.2-0.16,0.32-0.22c0.12-0.05,0.25-0.08,0.38-0.08H15c0.13,0,0.26,0.03,0.38,0.08c0.12,0.05,0.23,0.13,0.32,0.22
        c0.09,0.09,0.16,0.2,0.22,0.32C15.97,17.21,16,17.34,16,17.47z M24,14.47c0,0.14-0.03,0.26-0.08,0.38
        c-0.05,0.12-0.13,0.23-0.22,0.32c-0.09,0.09-0.2,0.16-0.32,0.22c-0.12,0.05-0.25,0.08-0.38,0.08h-6c-0.14,0-0.26-0.03-0.38-0.08
        c-0.12-0.05-0.23-0.13-0.32-0.22c-0.09-0.09-0.16-0.2-0.22-0.32C16.03,14.73,16,14.6,16,14.47v-5.5c0-0.13,0.03-0.26,0.08-0.38
        c0.05-0.12,0.13-0.23,0.22-0.32c0.09-0.09,0.2-0.16,0.32-0.22C16.74,8,16.86,7.97,17,7.97c0.13,0,0.26,0.03,0.38,0.08
        c0.12,0.05,0.23,0.13,0.32,0.22c0.09,0.09,0.16,0.2,0.22,0.32C17.97,8.71,18,8.84,18,8.97v3.09l3.29-3.3
        c0.09-0.09,0.2-0.17,0.32-0.21c0.12-0.05,0.25-0.07,0.39-0.07c0.13,0,0.26,0.03,0.38,0.08c0.12,0.05,0.23,0.13,0.32,0.22
        c0.09,0.09,0.16,0.2,0.22,0.32C22.97,9.21,23,9.34,23,9.47c0,0.14-0.03,0.27-0.07,0.39c-0.05,0.12-0.12,0.23-0.21,0.32l-3.3,3.29H23
        c0.13,0,0.26,0.03,0.38,0.08c0.12,0.05,0.23,0.13,0.32,0.22c0.09,0.09,0.16,0.2,0.22,0.32C23.97,14.21,24,14.34,24,14.47z"
      />
    </svg>
  ),
  displayName: 'CollapseIcon',
});
