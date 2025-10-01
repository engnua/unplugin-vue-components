import type { ComponentResolver } from '../../types'

/**
 * Resolver for Naive UI (ENGN Ukraine) version
 *
 * @author @antfu
 * @link https://www.naiveui.com/
 */
export function NaiveUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(N[A-Z]|n-[a-z])/))
        return { name, from: '@engnua/naive-ui' }
    },
  }
}
