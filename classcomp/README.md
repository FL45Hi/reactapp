## Class component and component lifecycle

### React Lifecycle Methods consist of 4 phases

### Initialization
1. This is where we define defaults and initial values for this.props and this.state
2. Implementing getDefaultProps() and getInitialState()

### Mounting
$ NOTE: Child component is mounted before the parent component $
1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

### Updating
1.static getDerivedStateFromProps()
2. shouldComponentUpdate() - this methods returns boolean i.e. it agrees with updation 
or not depending on that it return true or false
Unmounting
3. render()
4. getSnapshotBeforeUpdate() - this to have a snapshot previous state and getDerivedStateFromProps
5. componentDidUpdate() - this will be called only if shouldComponentUpdate will return
true

### Unmounting 
componentWillUnmount() - here you have to clean the resources.







