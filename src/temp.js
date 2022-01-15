<Drawer
variant="permanent"
className={classes.sideDrawer}
>
<Toolbar />
<Box className={classes.sideDrawerBox}>    
    <List>

        <Link to={"/newHomePage"} className={classes.pageLink}>
            <ListItem button key={'Home'} className={classes.drawerListItem}>
                <ListItemIcon className={classes.drawerListIcon}>
                    <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </ListItemIcon>
                <ListItemText primary={'Home'}  className={classes.drawerListIconText} />
            </ListItem>
        </Link>

        <Link to={"/getInteractionPair"} className={classes.pageLink}>
            <ListItem button key={'Interaction Pair Tool'} className={classes.drawerListItem}>
                <ListItemIcon className={classes.drawerListIcon}>
                    <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </ListItemIcon>
                <ListItemText primary={'Interaction Pair Tool'} className={classes.drawerListIconText} />
            </ListItem>
        </Link>

        <Link to={"/getDrugInteraction"} className={classes.pageLink}>
            <ListItem button key={'All Interactions Tool'} className={classes.drawerListItem}>
                <ListItemIcon className={classes.drawerListIcon}>
                    <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </ListItemIcon>
                <ListItemText primary={'All Interactions Tool'} className={classes.drawerListIconText}/>
            </ListItem>
        </Link>

        <Link to={"/AllDrugTerms"} className={classes.pageLink}>
            <ListItem button key={'All Substances'} className={classes.drawerListItem}>
                <ListItemIcon className={classes.drawerListIcon}>
                    <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                </ListItemIcon>
                <ListItemText primary={'All Substances'} className={classes.drawerListIconText} />
            </ListItem>
        </Link>

        <Link to={"/getRxcuiId"} className={classes.pageLink}>
            <ListItem button key={'Rxcui ID Finder Tool'} className={classes.drawerListItem}>
                <ListItemIcon className={classes.drawerListIcon}>
                    <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                </ListItemIcon>
                <ListItemText primary={'Rxcui ID Finder Tool'} className={classes.drawerListIconText} />
            </ListItem>
        </Link>

        <Link to={"/drug3dtest"} className={classes.pageLink}>
            <ListItem button key={'Molecule View Tool'} className={classes.drawerListItem}>
                <ListItemIcon className={classes.drawerListIcon}>
                    <svg width="30px" height="30px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </ListItemIcon>
                <ListItemText primary={'Molecule View Tool'} className={classes.drawerListIconText}/>
            </ListItem>
        </Link>
    </List>
    <Divider />
</Box>
</Drawer>