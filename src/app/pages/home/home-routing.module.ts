import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
                          { path: '', component: HomeComponent,
                            children: [
                              {
                                path: 'test',
                                loadChildren: () => import('./child-pages/print-demo/print-demo.module')
                                    .then(mod => mod.PrintDemoModule)
                              },
                              {
                                  path: 'owner',
                                  loadChildren: () => import('./child-pages/owner/owner.module')
                                        .then(mod => mod.OwnerModule)
                               },
                               {
                                  path: 'developer',
                                  loadChildren: () => import('./child-pages/developer/developer.module')
                                        .then(mod => mod.DeveloperModule)
                               },
                               {
                                    path: 'banking',
                                    loadChildren: () => import('./child-pages/banking/banking.module')
                                        .then(mod => mod.BankingModule)
                               },
                            ]
                          },
                          // { path: '404', loadChildren: () => import('./home-not-found/home-not-found.module')
                          //         .then(m => m.HomeNotFoundModule)
                          // },
                          // { path: '**', redirectTo: '/404'}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
