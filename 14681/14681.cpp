#include <iostream>

using namespace std;
int main()
{
    int X, Y;

    cin >> X >> Y;

    if(X > 0 && Y > 0)
    {
        cout << "1\n";
    }
    else if(X < 0 && Y > 0)
    {
        cout << "2\n";
    }
    else if(X < 0 && Y < 0)
    {
        cout << "3\n";
    }
    else
    {
        cout << "4\n";
    }

    return 0;
}