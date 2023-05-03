#include <iostream>

using namespace std;
int main()
{
    int Year;

    cin >> Year;

    if(Year % 4 == 0)
        if((Year % 100 != 0) || Year % 400 == 0)
            cout << "1\n";
        else
            cout << "0\n";
    else
    {
        cout << "0\n";
    }
    return 0;

}