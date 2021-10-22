import { CouponCell,Popover , CouponList, ActionBar, ActionBarIcon, ActionBarButton, Popover, Lazyload, Badge, Checkbox, CheckboxGroup, Popup, Icon, Sidebar, Tab, SidebarItem, Tabs, TreeSelect, CountDown, Search, Button, List, Cell, Tag, CellGroup, Toast, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem, Image as VanImage, Card, SubmitBar } from 'vant'

export function vant (app) {
  app.use(Lazyload, {
    lazyComponent: true
  })
  app.use(CouponCell)
  app.use(CouponList)
  app.use(ActionBar)
  app.use(ActionBarIcon)
  app.use(ActionBarButton)
  app.use(Popover)
  app.use(Badge)
  app.use(Checkbox)
  app.use(CheckboxGroup)
  app.use(Popup)
  app.use(Icon)
  app.use(Button)
  app.use(List)
  app.use(Cell)
  app.use(CellGroup)
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(Grid)
  app.use(GridItem)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(VanImage)
  app.use(Card)
  app.use(Toast)
  app.use(Search)
  app.use(CountDown)
  app.use(TreeSelect)
  app.use(Tab)
  app.use(Tabs)
  app.use(SubmitBar)
  app.use(Tag)
  app.use(Sidebar)
  app.use(SidebarItem)
  app.use(SubmitBar)
}
