class User{
    constructor(name, password){
        this.name = name;
        this.password = password;
        this.goalArray = [];
        this.dailyPoints = 0;
    }
    addGoal(goal){
        this.goalArray.push(goal);
    }

    deleteGoal(goal){
        this.goalArray.pop(goal)
    }

    updatePoints(points){
        this.dailyPoints += points;
    }

    // getPoints(){
    //     return this.dailyPoints;
    // }

    
}
