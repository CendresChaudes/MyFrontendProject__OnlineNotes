export enum AppRoute {
  Root = '/',
  Auth = '/auth',
  NotFound = '*'
}

export enum APIRoute {
  Notes = 'notes',
}

export enum Mode {
  Idle = 'idle',
  Add = 'add',
  ViewOnly = 'view-only',
  Edit = 'edit',
}
