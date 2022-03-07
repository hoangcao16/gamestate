import moment from 'moment';
import * as React from 'react';

interface DfyDatetimeFormatProps {
  format: string;
  children: any;
}

export const DatetimeFormat = (props: DfyDatetimeFormatProps) => {
  const { format, children } = props;
  return <>{moment(Number(children)).format(format)}</>;
};
