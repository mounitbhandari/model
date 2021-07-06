import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';








// @ts-ignore
const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  { path: 'top', loadChildren: () => import('./pages/home/top/top.module').then(m => m.TopModule) },

  { path: 'about', loadChildren: () => import('./pages/home/about/about.module').then(m => m.AboutModule) },

  { path: 'MenuPublic', loadChildren: () => import('./pages/home/menu/menu-public/menu-public.module').then(m => m.MenuPublicModule) },

  { path: 'MenuOwner', loadChildren: () => import('./pages/home/menu/menu-owner/menu-owner.module').then(m => m.MenuOwnerModule) },

  { path: 'MenuItem', loadChildren: () => import('./pages/home/menu/menu-item/menu-item.module').then(m => m.MenuItemModule) },

  { path: 'HomeNotFound', loadChildren: () => import('./pages/home/home-not-found/home-not-found.module').then(m => m.HomeNotFoundModule) },

  { path: 'WhyUs', loadChildren: () => import('./pages/home/why-us/why-us.module').then(m => m.WhyUsModule) },

  { path: 'features', loadChildren: () => import('./pages/home/features/features.module').then(m => m.FeaturesModule) },

  { path: 'PopularCourses', loadChildren: () => import('./pages/home/popular-courses/popular-courses.module').then(m => m.PopularCoursesModule) },

  { path: 'trainer', loadChildren: () => import('./pages/home/trainer/trainer.module').then(m => m.TrainerModule) },

  { path: 'developer', loadChildren: () => import('./pages/home/child-pages/developer/developer.module').then(m => m.DeveloperModule) },

  { path: 'MenuDeveloper', loadChildren: () => import('./pages/home/menu/menu-developer/menu-developer.module').then(m => m.MenuDeveloperModule) },

  { path: 'Admin', loadChildren: () => import('./pages/home/child-pages/admin/admin.module').then(m => m.AdminModule) },

  { path: 'banking', loadChildren: () => import('./pages/home/child-pages/banking/banking.module').then(m => m.BankingModule) },

  { path: 'LoadingSpinner', loadChildren: () => import('./shared/loading-spinner/loading-spinner.module').then(m => m.LoadingSpinnerModule) },

  { path: 'TestSection', loadChildren: () => import('./pages/home/test-section/test-section.module').then(m => m.TestSectionModule) },
  { path: 'OfferSection', loadChildren: () => import('./pages/home/offer-section/offer-section.module').then(m => m.OfferSectionModule) },
  { path: 'CalloutSection', loadChildren: () => import('./pages/home/callout-section/callout-section.module').then(m => m.CalloutSectionModule) },
  { path: 'PortfolioSection', loadChildren: () => import('./pages/home/portfolio-section/portfolio-section.module').then(m => m.PortfolioSectionModule) },

  // { path: 'auth', loadChildren: () => import('./pages/home/auth/auth.module').then(m => m.AuthModule) },
  // { path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  // { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
