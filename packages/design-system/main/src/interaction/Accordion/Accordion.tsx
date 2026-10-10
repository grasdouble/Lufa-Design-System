import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import { Icon } from '../../content/Icon';
import { Text } from '../../content/Text';
import styles from './Accordion.module.css';

/**
 * Accordion disclosure built on native `details` and `summary` elements.
 *
 * Accessibility contract: the browser supplies keyboard activation and expanded
 * state semantics. Consumers must provide a concise summary and meaningful
 * content; each Accordion is independent, so multiple items may remain open.
 *
 * @example
 * ```tsx
 * <Accordion summary="How does it work?">
 *   The answer is shown when the summary is expanded.
 * </Accordion>
 * ```
 */
export type AccordionProps = Omit<ComponentPropsWithoutRef<'details'>, 'children'> & {
  /** Content displayed inside the native disclosure summary. */
  summary: ReactNode;
  /** Content revealed while the disclosure is open. */
  children: ReactNode;
  /** Visual indicator shown at the end of the summary. Defaults to `plus-minus`. */
  indicator?: 'plus-minus' | 'chevron';
};

const AccordionImpl = (
  { summary, children, className, indicator = 'plus-minus', ...props }: AccordionProps,
  ref: ForwardedRef<HTMLDetailsElement>
) => (
  <details ref={ref} className={clsx(styles.accordion, className)} {...props}>
    <summary className={styles.summary}>
      <Text className={styles['summary-label']} as="span" variant="body" fontFamily="heading">
        {summary}
      </Text>
      {indicator === 'plus-minus' ? (
        <span className={styles['plus-minus']} aria-hidden="true" />
      ) : (
        <Icon className={styles.chevron} name="chevron-down" size="md" aria-hidden="true" />
      )}
    </summary>
    <div className={styles.content}>{children}</div>
  </details>
);

export const Accordion = forwardRef(AccordionImpl);
Accordion.displayName = 'Accordion';
