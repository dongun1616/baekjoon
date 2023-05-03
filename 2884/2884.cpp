#include <iostream>

using namespace std;
int main()
{
    int H, M;

    cin >> H >> M;

    if ((M < 45) && (H == 0))
    {
        cout << "23" << " " << M+15;
    }   
    else if((M < 45) && (H != 0))
    {
        cout << H -1 << " " << M+15;
    }      
    else
    {
        cout << H << " " << M-45;
    }

    return 0;
}