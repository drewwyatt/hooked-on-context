import { ComponentType } from 'react'
import { RouteComponentProps } from '@reach/router'

export const withRouteProps = <Props extends {}>(c: ComponentType<Props>) =>
  c as ComponentType<Props & RouteComponentProps>
